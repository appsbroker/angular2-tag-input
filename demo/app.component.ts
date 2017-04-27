import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rl-demo-app',
  template: require('./app.component.html')
})
export class AppComponent {
  productForm: FormGroup;
  public autocompleteTags = [];
  public autocompleteItems = [
    { id: 1, sbrodolax: 'Banana' },
    { id: 2, sbrodolax: 'Orange' },
    { id: 3, sbrodolax: 'Apple' },
    { id: 4, sbrodolax: 'Pear' },
    { id: 5, sbrodolax: 'Grape' },
    { id: 6, sbrodolax: 'Potato' },
    { id: 7, sbrodolax: 'Peach' }
  ];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      'authors': [[{ id: 1, gnagna: 'Car' }, { id: 1, gnagna: 'Bus' }, 'Train'], Validators.required],
    });
  }

  submitForm() {
    const product = this.productForm.value;
    console.log(product);
  }
}
