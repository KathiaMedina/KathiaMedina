import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      hourlyRate: [0, [Validators.required, Validators.min(0)]],
      hoursWorked: [0, [Validators.required, Validators.min(0)]],
      overtimeHours: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const { name, hourlyRate, hoursWorked, overtimeHours } = this.employeeForm.value;
      const regularPay = hourlyRate * hoursWorked;
      const overtimePay = hourlyRate * 1.5 * overtimeHours;
      const totalPay = regularPay + overtimePay;

      console.log(`Nombre: ${name}`);
      console.log(`Pago Total: ${totalPay}`);
    }
  }
}
