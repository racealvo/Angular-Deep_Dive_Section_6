import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form: ElementRef<HTMLFormElement> | undefined;

  onSubmit (title: string, ticketText: string) {
    console.log("Entered Title: " + title);
    console.log("Entered Ticket Text: " + ticketText);
    this.form?.nativeElement.reset();
  }
}
