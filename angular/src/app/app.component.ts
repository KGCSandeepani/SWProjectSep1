import { Component } from '@angular/core';
import {student} from './studentDataModel'
import {NgForm} from '@angular/forms';

import { StudentDataServiceService } from './student-data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondyearprojecteka';

  student:student[];
  constructor(private studentService : StudentDataServiceService){
    
}

ngOnInit(){
 
}  

  onSubmit(formdata:NgForm){
    // console.log(formdata.value.s_text);
    this.studentService.getStudentData(formdata)
    .subscribe((data : student[] )=> {
        this.student = data;
    });
}


}
