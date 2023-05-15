import { render, screen } from '@testing-library/react';
import Header from './componets/Header';
import handleClick  from './utils/HandleClick';
import ReservePage from './componets/ReservePage';
import userEvent from '@testing-library/user-event';
import { submitAPI } from './utils/TimeGenerator';
test('testing Header containg the roles ', () => {
  render(<Header/>);  
  expect(screen.getByRole("img")).toBeInTheDocument();
});

  describe('check handle click function return correct result', () => {
  test('check handle click function return correct result', () => {
      expect(handleClick('contact')).toBe('contact-section');
      expect(submitAPI('data')).toBe(true);

    });
 });


 test('testing form elements', () => {
  render(<ReservePage/>);  
  const dateInput = screen.getByTestId("input-date");  
  const guestInput = screen.getByTestId("input-guest");  
  const button = screen.getByTestId("input-button");  
  expect(dateInput).toBeInTheDocument();
  expect(guestInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(dateInput).toHaveAttribute("type", "date");
  expect(guestInput).toHaveAttribute("type", "number");
  expect(button).toHaveTextContent("Make Your Reservation");
});

test('testing correct page is rendered', () => {
  render(<ReservePage/>);  
  const button = screen.getByTestId("input-button");  
  userEvent.click(button);
  screen.debug();

});





