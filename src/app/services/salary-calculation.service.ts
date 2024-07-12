import { Injectable } from '@angular/core';
import { SalaryCalculationRequestModel } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponseModel } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {

  constructor() { }

  calculateSalary(request: SalaryCalculationRequestModel): SalaryCalculationResponseModel {
    const regularSalary = request.hoursWorked * request.hourlyRate;
    const overtimeSalary = request.overtimeHours * request.hourlyRate * 1.5;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.1;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}
