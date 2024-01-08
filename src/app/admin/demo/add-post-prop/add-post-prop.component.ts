import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-post-prop',
  templateUrl: './add-post-prop.component.html',
  styleUrls: ['./add-post-prop.component.css'],
})
export class AddPostPropComponent {
class: any;
  constructor(
    private service: AdminService,
    private router: Router,
    private arouter: ActivatedRoute,
    private fb:FormBuilder
  ) {}
  userName:any
  id:any
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((res: any) => {
      this.userName = res['user'];
      this.id= res['id'];
      
    });
    this.myform = this.fb.group({
      category: new FormControl('', Validators.required),
      postType: new FormControl('', Validators.required),
      propertyType: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      priceExp: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
     
      furnitionStatus: new FormControl(null, Validators.required),
      bhkBuilding:new FormControl('',Validators.required),
      Description: new FormControl('', Validators.required),
      sqft: new FormControl('', Validators.required),
      finish : new FormControl(true),
    });
  }
  submitted: boolean = false;
  myform!: FormGroup
  selectedImg: any;
  submit() {
    this.submitted = true;
    console.log(
      this.myform.valid && this.imageform.valid,
      this.myform.value,
      this.imageform.valid
    );
    if (this.myform.valid && this.imagePreview.length > 0){
      const formdata = new FormData();
      const images = this.imageform.get('images') as FormArray;
      console.log(images.value  )
      const files: Array<File> =images.value;
      for (let i = 0; i < files.length; i++) {
        if(files[i] !=null){
        formdata.append('imageArr', files[i], files[i]['name']);
        }
        console.log(formdata);
      }
      this.service.demo_img_grp(formdata,this.id).subscribe((res:any)=>{
        console.log(res,'image uploade');
        this.service.update_demo_post(this.id,this.myform.value).subscribe((res:any)=>{
          console.log(res,'text uploade')
          this.submitted=false
          this.router.navigateByUrl('/admin/manage-demo-post')
        })
      })
     
    }
  }
  Tenatshow=false
  showTenat(v:any){
    if(v.target.value == 'Rent'){
     this.Tenatshow = true
      this.myform.addControl('tenantType', new FormControl('', Validators.required));
    }else{
      this.Tenatshow = false
      this.myform.removeControl('tenantType');
    }
  }
  get Formcontrol() {
    return this.myform.controls;
  }
  imageform : any = this.fb.group({
    images:this.fb.array([
      this.fb.control(null),
      this.fb.control(null),
      this.fb.control(null),
      this.fb.control(null),
      this.fb.control(null)
     
    ])
  })
  errmsg:any
  imagePreview: string[]=[];
  onFileselect(e:any){
    
    this.imageform.get('images').reset();
    this.imagePreview= [];
    const files = e.target.files;
    if (files.length <= 5) {
      this.errmsg ='';
    for(let i=0;i < files.length && i<=5;i++){
      const file = files[i];
   
     const images = this.imageform.get('images') as FormArray;
     images.at(i).setValue(file);

      const reader = new FileReader();
      reader.onload= () =>{
        this.imagePreview[i] = reader.result as string;

        console.log(this.imagePreview);

      }
      reader.readAsDataURL(file);
    }
  }else {
    e.target.value = '';
    this.errmsg = 'Upload 5 images only';
    return;
  }

  }
  removeimg(index: number) {
    console.log('remove working');
        this.imageform.get('images').get(index.toString()).setValue(null);
        this.imagePreview.splice(index,1);
        const input= document.getElementById('imginpt') as HTMLInputElement;
       input.value = '';
  }
}
