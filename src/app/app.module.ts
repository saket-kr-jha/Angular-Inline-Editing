import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineEditingOneComponent } from './pages/inline-editing-one/inline-editing-one.component';
import { InlineEditingtwoComponent } from './pages/inline-editingtwo/inline-editingtwo.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './pages/components/parent/parent.component';
import { ChildComponent } from './pages/components/child/child.component';
import { EmailTooltipDirective } from './pages/inline-editing-one/email-tooltip.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    InlineEditingOneComponent,
    InlineEditingtwoComponent,
    ParentComponent,
    ChildComponent,
    EmailTooltipDirective,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
