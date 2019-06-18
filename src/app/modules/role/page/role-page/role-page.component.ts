import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleServiceService } from 'src/app/core/services/role-service.service';
import { RoleView } from 'src/app/shared/models/request/role/role-view';
import { RoleAdd } from 'src/app/shared/models/request/role/role-add';
import Swal from 'sweetalert2';
import { VirtualTimeScheduler } from 'rxjs';
import { RoleEdit } from 'src/app/shared/models/request/role/role-edit';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare var $:any;
@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.scss']
})
export class RolePageComponent implements OnInit {

  private sub: any;
  roleCodeForm = new FormControl();
  roleNameForm = new FormControl();
  systemId:String;
  resultRole = new Array;
  statusUpdate = false;
  constructor(
    private route: ActivatedRoute,
    private roleViewService:RoleServiceService,
    private roleAddService:RoleServiceService,
    private roleEditService:RoleServiceService,
    private roleView:RoleView,
    private roleAdd:RoleAdd,
    private roleEdit:RoleEdit,
    private ngxService:NgxUiLoaderService
  ) {}
 
  ngOnInit() {
    this.ngxService.start();
    this.getIdSystem();
    this.doViewRole();
  }
  doViewRole(){
      this.roleView.systemId = this.systemId;
      this.roleViewService.getRoleBySystemId(this.roleView)
     .subscribe(
      res => this.resultRole = res
    );
    this.ngxService.stop();
  }
  addRole(){
    this.clearFormInput();
    this.statusUpdate = false;
  }
  doAddRole(){
    this.roleAdd.systemId = +this.systemId;
    this.roleAdd.roleCode = this.roleCodeForm.value;
    this.roleAdd.roleName = this.roleNameForm.value;
    this.roleAdd.roleIcon = null;
    this.roleAddService.addRole(this.roleAdd)
    .subscribe();
  }
  editRoleForm(role:any){
    this.inputEditRole(role);
    this.roleEdit.systemId = role.systemId;
    this.statusUpdate = true;
  }
  editRole(){
    this.roleEdit.newName = this.roleCodeForm.value
    this.roleEdit.roleCode = this.roleNameForm.value
    this.roleEdit.newIcon = "icon";
    this.roleEditService.editRole(this.roleEdit)
    .subscribe();
  }
  saveRole(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save Role',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        if(this.statusUpdate == true){
          this.editRole();
          Swal.fire(
            'Success!',
            'Your has been save',
            'success'
          )
          console.log('edit Role success');
        }
        else{
          this.doAddRole()
          Swal.fire(
            'Success!',
            'Your has been save',
            'success'
          )
          console.log('add Role success');
        }
        setTimeout(() => {
          window.location.reload();
        }, 500);
        $('#modelAddRole').modal('hide');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }
  deleteRole(code:string){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Role',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your Role has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }
  clearFormInput(){
    this.roleCodeForm.setValue("");
    this.roleNameForm.setValue("");
  }
  getIdSystem(){
    this.sub = this.route.params.subscribe(params => {
      this.systemId = ""+ params['id']; 
   });
  }
  inputEditRole(role:any){
    this.roleCodeForm.setValue(role.roleCode);
    this.roleNameForm.setValue(role.roleName);
  }


}
