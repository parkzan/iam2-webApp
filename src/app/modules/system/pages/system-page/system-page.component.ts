import { SystemEditReq } from 'src/app/shared/models/request/system/system-edit-req';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SystemSystemService } from 'src/app/core/services/system-service.service';
import { SystemAddReq } from 'src/app/shared/models/request/system/system-add-req';
import { SystemDeleteReq } from 'src/app/shared/models/request/system/system-delete-req';
import Swal  from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare var $:any;

@Component({
  selector: 'app-system-page',
  templateUrl: './system-page.component.html',
  styleUrls: ['./system-page.component.scss']
})
export class SystemPageComponent implements OnInit {
  myTest:any;
  name = new FormControl();
  code = new FormControl();
  icon = new FormControl();
  resultSystem = new Array;
  systemAddReq:any;
  checkUpdate:boolean = false;
  constructor(
    private systemViewApi:SystemSystemService,
    private addSystemApi:SystemSystemService,
    private SystemAddReq:SystemAddReq,
    private delSystemApi:SystemSystemService,
    private deleteReqModel:SystemDeleteReq,
    private editSystemModel:SystemEditReq,
    private editSystemApi:SystemSystemService,
    private ngxService:NgxUiLoaderService
    ) {  } 
  ngOnInit() {
    this.ngxService.start();
    this.viewSystem();
  }
  viewSystem(){
    this.systemViewApi.getAllSystem()
    .subscribe(
       data => this.resultSystem = data
      );
      this.ngxService.stop();
  }
  editSystem(data:any){
    this.inputEditSysetm(data);
    this.checkUpdate = true;
  }
  updateSystem(){
    this.editSystemModel.newName = this.name.value;
    this.editSystemModel.systemCode = this.code.value;
    this.editSystemModel.newIcon = this.icon.value;
    this.editSystemApi.getUpdateSystem(this.editSystemModel)
    .subscribe();
  }
  doAddSystem(){
    this.SystemAddReq.systemName = this.name.value;
    this.SystemAddReq.systemCode = this.code.value;
    this.SystemAddReq.systemIcon = this.icon.value;
    this.addSystemApi.getAddSystem(this.SystemAddReq)
    .subscribe();
  } 
  deleteSystem(data){
    this.deleteReqModel.systemCode =  data.systemCode;
    this.delSystemApi.getDeleteSystem(this.deleteReqModel)
    .subscribe(
      Response => this.delSystemApi = Response
    );
    console.log(this.delSystemApi);
  }
  saveSystem(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save System',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        if(this.checkUpdate == false){
          console.log("save way");
          this.doAddSystem();
          Swal.fire(
            'Success!',
            'Your has been save',
            'success'
          )
        }else{
          console.log("update way");
          this.updateSystem();
          Swal.fire(
            'Success!',
            'Your has been update',
            'success'
          )
        }
        setTimeout(() => {
          // window.location.reload();
        }, 500);
        $('#modelAddSystem').modal('hide');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }
  delSystem(data:any){
    console.log(data);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this '+data.systemName,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your '+data.systemName+' has been deleted.',
          'success'
        )
        this.deleteSystem(data);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  } 
  addSystem(){
    this.clearFormInput();
    this.checkUpdate = false;
  }
  inputEditSysetm(data){
    this.name.setValue(data.systemName); 
    this.code.setValue(data.systemCode);
  }
  clearFormInput(){
    this.name.setValue("");
    this.code.setValue("");
  }

}
