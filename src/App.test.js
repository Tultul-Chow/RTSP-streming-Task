import {render} from '@testing-library/react';
import VideoPlay from'./components/videoPlay'
import {validateInput} from './components/videoPlay';

describe("email",()=> {
  test("Validate Input with correct input",()=>{
    const Input='abcd.com'
    expect(validateInput(Input)).toBe(true);
  });
  test("Validate Ipunt when not a valid input",()=>{
    const custInput='abc'
    expect(validateInput(custInput)).not.toBe(true);
  });
  test("Input field must be in the component",()=>{
    const component= render (<VideoPlay/>);
    const labelNode = component.getAllByLabelText("Please Enter a web URL");
    expect (labelNode).toBeInTheDocument();
  });
 
});