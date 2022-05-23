import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '../pages/login/login';
import SignUp from '../pages/signup/signup';

describe('Login', () => {

  it('Deverá ser uma função', () => {
    expect(typeof Login).toBe('function');
  });
})

describe('SignUp', () => {
  
  it('Deverá ser uma função', () => {
    expect(typeof SignUp).toBe('function');
  });
})