import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketUpdateComponent } from './ticket-update/ticket-update.component';
import { TicketDeleteComponent } from './ticket-delete/ticket-delete.component';
import { ContactComponent } from './contact/contact.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketViewComponent,
    TicketCreateComponent,
    TicketUpdateComponent,
    TicketDeleteComponent,
    ContactComponent,
    ContactViewComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    ContactDeleteComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
