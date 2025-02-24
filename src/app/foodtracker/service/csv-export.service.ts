import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {

  constructor() {
  }

  downloadFile(data: any, filename = 'data') {
    let csvData = this.ConvertToCSV(data, ['Employee Number', 'Name', 'Department', 'Number of reserved meals', "Number of used meals", "Total price"]);
    let blob = new Blob(['\ufeff' + csvData], {type: 'text/csv;charset=utf-8;'});
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
      temp['Employee Number'] = obj.employeeNumber;
      // @ts-ignore
      temp['Name'] = obj.name;
      // @ts-ignore
      temp['Department'] = obj.department.join(", ");
      // @ts-ignore
      temp['Number of reserved meals'] = obj.mealCountReserved;
      // @ts-ignore
      temp['Number of used meals'] = obj.mealCountUsed;
      temp['Total price'] = obj.mealTotalPrice;
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
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];

        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }
}
