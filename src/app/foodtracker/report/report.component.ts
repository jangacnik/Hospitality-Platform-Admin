import {AfterViewChecked, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MonthlyMealInfo} from "../model/MonthlyMealInfo";
import {DepartmentListItem} from "../model/DepartmentListItem";
import {CsvExportService} from "../service/csv-export.service";
import {FoodTrackerRestService} from "../service/food-tracker-rest.service";
import {data} from "autoprefixer";
import { Workbook } from 'exceljs';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, AfterViewChecked {
  displayedColumnsMeals: string[] = ['employeeNumber', 'name', 'department', 'meals_reserved', 'meals_used', 'total'];
  excelHeaders: string[] = ['Employee Number', 'Name', 'Department', 'Reserved meals', 'Recorded Meals', 'Total price'];

  searchForm = new FormGroup({
    searchName: new FormControl('', []),
    searchDepartment: new FormControl('', [])
  });

  entries: MonthlyMealInfo[];
  @Input() price: number;
  @Input() departmentList: DepartmentListItem[];
  entriesOld: MonthlyMealInfo[];

  @ViewChild("self")
  self: ElementRef;
  parentH: number;

  noReportsAvailable = false;
  fetchReportError = false;
  dataReady = false;
  protected readonly data = data;

  constructor(private csvExport: CsvExportService, private foodService: FoodTrackerRestService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight * 0.75;
  }

  ngAfterViewChecked() {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight * 0.75;
  }

  onSearchMeals() {
    const name = this.searchForm.get("searchName")?.value;
    const dep = this.searchForm.get("searchDepartment")?.value;
    if (dep && name) {
      this.entries = this.entriesOld.filter((val) => {
        return (val.name).toLowerCase().includes(<string>name?.toLowerCase()) &&
          val.department.includes(dep)
      });
    } else if (dep) {
      this.entries = this.entriesOld.filter((val) => {
        return val.department.includes(dep)
      });
    } else if (name) {
      this.entries = this.entriesOld.filter((val) => {
        return (val.name).toLowerCase().includes(<string>name?.toLowerCase())
      });
    }
  }

  onResetMeals() {
    this.entries = this.entriesOld;
  }

  getReport() {
    this.csvExport.downloadFile(this.entries, "report");
  }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData() {
    this.foodService.getCurrentMonthTracking().subscribe((data) => {
      this.entries = data;
      this.entriesOld = data;
      this.entries.sort(
        (a, b) =>
          Number(a.employeeNumber) - Number(b.employeeNumber))

      this.dataReady = true;
      this.noReportsAvailable = false;
    }, err => {
      this.dataReady = true;
      this.noReportsAvailable = true;
    });
  }

  refreshData() {
    this.dataReady = false;
    this.getReportData();
  }

  exportexcel(): void
  {
    const workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Meal Report');
    const keys = Object.keys(this.entries[0]);
    let headerCell = worksheet.addRow(this.excelHeaders);
    headerCell.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ccaf8a' },
        bgColor: { argb: '' }
      }
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFF' },
        size: 12
      }
    })
    this.entries.forEach((item) => {
      const row:any = [];
      keys.forEach((header) => {
        if(header === "department"){
          row.push(item[header].join(", "));
        }else if (header === "employeeNumber") {
          row.push(+item[header])
        } else {
          row.push(item[header]);
        }
      });
      worksheet.addRow(row);
    });

    for (let l: number = 1; l <= this.excelHeaders.length; l++) {
      worksheet.getColumn(l).width = 18;
    }
    worksheet.getColumn(2).width = 25;
    worksheet.getColumn(3).width = 25;
    worksheet.getColumn(6).numFmt = 'kr#,##0.00;[Red]-kr#,##0.00';
    workbook.xlsx.writeBuffer().then((buffer: any) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, `report.xlsx`);
    });
  }
}
