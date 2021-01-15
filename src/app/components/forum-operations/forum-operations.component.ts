import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from 'src/app/services/forum.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-forum-operations',
  templateUrl: './forum-operations.component.html',
  styleUrls: ['./forum-operations.component.css']
})
export class ForumOperationsComponent implements OnInit {

  TitleOperation = 'New Ticket';
  forumForm: FormGroup;

  validationMessages = {
    technology: {
      required: 'Technology is Required'
    },
    descriptionProbleme: {
      required: 'Description is Required',
      minlength: 'Description must be greater than 2 carateres',
      maxlength: 'Description must be less than 50 Carateres'
    },
    priority : {
      required: 'Priority is Required',
    }
  };

  formErros = {
    technology: '',
    descriptionProbleme: '',
    priority : ''
  };

  priorities: string[] =  ['Medium', 'Higher', 'Critical', 'Low'];

  // ticket = Math.floor(12 + Math.random() * 565241);

  constructor(private formBuilder: FormBuilder,
              private forumService: ForumService,
              private toastr: ToastrService,
              private router: Router
  ) { }

  ngOnInit() {
    this.forumForm = this.formBuilder.group({
      technology: ['', [Validators.required]],
      ticket: [Math.floor(12 + Math.random() * 565241)],
      descriptionProbleme: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      priority: ['Medium', Validators.required],
      dueDate: [''],
      resolutionProbleme: [null]
    });

    this.forumForm.valueChanges
      .subscribe(() => this.logValidationErrors(this.forumForm));
  }

  onResetForm(forumForm?: FormGroup): void {
    forumForm.reset();
  }

  onSubmitForm(forumForm: FormGroup = this.forumForm) {
    const resource = JSON.parse(JSON.stringify(this.forumForm.value));
    if (forumForm.valid) {
      this.forumService.addTicket(resource)
        .then((res) => {
          this.router.navigateByUrl('/forum');
          this.toastr.success('Ticket Add With SuccessuFully !');
        }).
        catch((err) => this.toastr.warning(err));
    }
    this.onResetForm(forumForm);
  }

  onLoadData(): void {
    this.forumForm.patchValue({
      technology: 'Angular',
      descriptionProbleme: 'How to Fix This Problemes ?? ',
      priority: 'Medium',
      dueDate: '2020-12-23'
    });
  }

  logValidationErrors(group: FormGroup = this.forumForm) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErros[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErros[key] += messages[errorKey] + ' ';
          }
        }
      }
      // FormGroup
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  onSelect(event: TypeaheadMatch): void {
    this.priorities = event.item;
  }

}
