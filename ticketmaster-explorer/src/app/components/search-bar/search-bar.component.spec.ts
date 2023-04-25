import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // I'm going to write pseudo code for the rest of the tests in the interest of time

  describe('searchEvents', () => {
    describe('given valid parameters', () => {
      it('should not return null response', () => {
        // Arrange
        // Set up the parameters
        // Act
        // Call the function
        // Assert
        // Check that the response is not null
      });
      // I'd check different combinations of parameters here
    });
    describe('given invalid parameters', () => {
      it('should return null response', () => {
        // Arrange
        // Set up the parameters
        // Act
        // Call the function
        // Assert
        // Check that the response is null
      });
      it('should throw an error', () => {
        // Arrange
        // Set up the parameters
        // Act
        // Call the function
        // Assert
        // Check that the response is null
      });
    });
  });
       
});
