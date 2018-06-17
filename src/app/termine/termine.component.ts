import { Component, OnInit, DoCheck } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { AuthenticationService } from '../services/authentication.service';

import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-termine',
  templateUrl: './termine.component.html',
  styleUrls: ['./termine.component.css']
})
export class TermineComponent implements OnInit, DoCheck {
  appointments: Appointment[] = [];

  appointment: Appointment = {
    date: null,
    content: '',
    time: ''
  }

  loggedIn: boolean = false;
  editState: boolean = false;
  appointmentToEdit: Appointment;

  constructor(private appointmentService: AppointmentService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.appointmentService.getItems().subscribe(appointments => {
      this.appointments = appointments;
    })
    if (this.authService.isLoggedIn()) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  }

  ngDoCheck() {
    this.appointmentService.getItems().subscribe(appointments => {
      this.appointments = appointments;
    })
    if (this.authService.isLoggedIn()) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  }

  onSubmit() {
    if (this.appointment.date != null && this.appointment.content != '' && this.appointment.time != '') {
      this.appointmentService.addItem(this.appointment);
      this.appointment.date = null;
      this.appointment.content = '';
      this.appointment.time = '';
    }
  }

  deleteItem(event, appointment: Appointment) {
    this.clearState();
    this.appointmentService.deleteItem(appointment);
  }

  editItem(event, appointment: Appointment) {
    this.editState = true;
    this.appointmentToEdit = appointment;
  }

  updateItem(appointment: Appointment) {
    this.appointmentService.updateItem(appointment);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.appointmentToEdit = null;
  }

}
