import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {

  constructor() { }

  downloadFile(data: any, filename='data') {
    let csvData = this.ConvertToCSV(data, ['name', 'employeeNumber', 'meals', 'department', "total"]);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray: any, headerList: any) {
    let converted = [];
    for (let obj of objArray) {
      let temp = {};
      // @ts-ignore
      temp['employeeNumber'] = obj.user.employeeNumber;
      // @ts-ignore
      temp['name'] = obj.user.firstName + " " + obj.user.lastName;
      // @ts-ignore
      temp['department'] = obj.user.departments.join(", ");
      // @ts-ignore
      temp['meals'] = obj.mealEntry.mealCount;
      // @ts-ignore
      temp['total'] = obj.total;
      converted.push(temp);
    }
    // @ts-ignore
    let array = typeof objArray != 'object' ? JSON.parse(converted) : converted;
    let str = '';
    let row = 'Id,';

    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i+1)+'';
      for (let index in headerList) {
        let head = headerList[index];

        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }
}
