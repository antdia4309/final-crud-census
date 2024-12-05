import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-census',
  templateUrl: './edit-census.component.html',
  styleUrls: ['./edit-census.component.css']
})
export class EditCensusComponent implements OnInit {
  censusForm: FormGroup;
  censusId: string;
  error: string | null = null;
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService
  ) {
    this.censusForm = this.formBuilder.group({
      household_members: [''],
      street: [''],
      city: [''],
      state: [''],
      zip_code: [''],
      census_year: [''],
      takers_name: [''],
    });
    this.censusId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.crudService.GetACensus(this.censusId).subscribe({
      next: (data: any) => {
        this.loading = false;
        if (data) {
          this.censusForm.setValue({
            household_members: data.household_members,
            street: data.street,
            city: data.city,
            state: data.state,
            zip_code: data.zip_code,
            census_year: data.census_year,
            takers_name: data.takers_name,
          });
        } else {
          this.error = 'Census details not found.';
        }
      },
      error: (err: any) => {
        this.loading = false;
        this.error = 'Failed to load census details. Please try again later.';
        console.error('Error fetching census details', err);
      },
    });
  }

  onSubmit(): void {
    if (this.censusForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.crudService.UpdateCensus(this.censusId, this.censusForm.value).subscribe({
      next: (response: any) => {
        console.log('Census updated successfully:', response);
        this.router.navigate(['/census-list']);
      },
      error: (err: any) => {
        console.error('Error updating census:', err);
        this.error = 'Failed to update census. Please try again.'
      },
    });
  }
}
