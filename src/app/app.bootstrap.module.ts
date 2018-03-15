import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

// import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/alert';

@NgModule({
  imports: [
    // Ng2BootstrapModule,
    AlertModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
      BsDropdownModule, TooltipModule, ModalModule
    ]
})
export class AppBootstrapModule {}