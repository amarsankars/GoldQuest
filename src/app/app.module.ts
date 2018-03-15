import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { QuestionService } from './question.service';
import { QuestviewComponent } from './questview/questview.component';
import { ResultviewComponent } from './resultview/resultview.component';
import { ResultService } from './result.service';
import { InstructionsComponent } from './instructions/instructions.component';
// import { AppBootstrapModule } from './app.bootstrap.module';


@NgModule({
  declarations: [
    AppComponent,
    QuestviewComponent,
    ResultviewComponent,
    InstructionsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
  imports: [
    // AppBootstrapModule,
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [QuestionService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
