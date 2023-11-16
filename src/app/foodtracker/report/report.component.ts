import {AfterViewChecked, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MonthlyMealInfo} from "../model/MonthlyMealInfo";
import {DepartmentListItem} from "../model/DepartmentListItem";
import {CsvExportService} from "../service/csv-export.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, AfterViewChecked{
  displayedColumnsMeals: string[] = ['employeeNumber', 'name', 'department', 'meals_reserved', 'meals_used', 'total'];
  searchForm = new FormGroup({
    searchName: new FormControl('', []),
    searchDepartment: new FormControl('', [])
  });

  @Input() entries: MonthlyMealInfo[];
  @Input() price: number;
  @Input() departmentList: DepartmentListItem[];
  entriesOld: MonthlyMealInfo[];

  @ViewChild("self")
  self: ElementRef;
  parentH: number;
  constructor(private csvExport: CsvExportService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
  }
  ngAfterViewChecked() {
    this.parentH = this.self.nativeElement.offsetParent.clientHeight*0.75;
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
    this.entriesOld = this.entries;
  }

}
