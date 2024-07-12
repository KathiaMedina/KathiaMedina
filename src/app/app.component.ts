import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SalaryCalculationResponseModel} from "./models/salary-calculation-response.model";
import {SalaryCalculationService} from "./services/salary-calculation.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeForm: FormGroup;
  salaryResponse?: SalaryCalculationResponseModel;

  constructor(private fb: FormBuilder, private salaryService: SalaryCalculationService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      hourlyRate: [0, [Validators.required, Validators.min(0)]],
      hoursWorked: [0, [Validators.required, Validators.min(0)]],
      overtimeHours: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const request = this.employeeForm.value;
      this.salaryResponse = this.salaryService.calculateSalary(request);
    }
  }
}
