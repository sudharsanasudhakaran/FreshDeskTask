import { NgModule } from '@angular/core';
import { TicketComponent} from "./ticket/ticket.component";
import { TicketCreateComponent} from "./ticket-create/ticket-create.component";
import { Routes, RouterModule } from '@angular/router';
import { TicketUpdateComponent} from "./ticket-update/ticket-update.component";
import {TicketViewComponent} from "./ticket-view/ticket-view.component";
import {TicketDeleteComponent} from "./ticket-delete/ticket-delete.component";
import { ContactCreateComponent} from "./contact-create/contact-create.component";
import { ContactUpdateComponent} from "./contact-update/contact-update.component";
import {ContactViewComponent} from "./contact-view/contact-view.component";
import {ContactDeleteComponent} from "./contact-delete/contact-delete.component";
const routes: Routes = [
  {
    path: "Ticket",
    component: TicketComponent
  },
  {
    path: "TicketCreate",
    component: TicketCreateComponent
  },
  {
    path: "TicketUpdate",
    component: TicketUpdateComponent
  },
  {
    path: "TicketView",
    component: TicketViewComponent
  },
  {
    path : "TicketDelete",
    component: TicketDeleteComponent
  },
  {
    path: "ContactCreate",
    component: ContactCreateComponent
  },
  {
    path: "ContactUpdate",
    component: ContactUpdateComponent
  },
  {
    path: "ContactView",
    component: ContactViewComponent
  },
  {
    path : "ContactDelete",
    component: ContactDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
