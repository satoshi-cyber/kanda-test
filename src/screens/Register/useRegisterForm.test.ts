import { act, renderHook } from '@testing-library/react-hooks/native';
import errorMessages from './errorMessages';

import useRegisterForm from './useRegisterForm';

describe('useRegisterForm', () => {
  const event = { preventDefault: jest.fn() } as any;
  const onSuccess = jest.fn();

  it('Should return errors on required fields', async () => {
    const { result } = renderHook(() => useRegisterForm(onSuccess));

    expect(result.current.pristine).toBe(true);

    act(() => {
      result.current.setValue('firstName', 'Lorem');
    });

    expect(result.current.pristine).toBe(false);

    await act(async () => {
      await result.current.handleSubmit(event);
    });

    expect(event.preventDefault).toBeCalled();
    expect(result.current.errors).toEqual({
      lastName: errorMessages.lastNameRequired,
      email: errorMessages.emailRequired,
      password: errorMessages.passwordRequired,
      confirmPassword: errorMessages.confirmPasswordRequired,
    });
    expect(result.current.submitting).toBe(false);
    expect(onSuccess).not.toBeCalled();
  });

  it('Should return validate errors on email and passwords fields', async () => {
    const { result } = renderHook(() => useRegisterForm(onSuccess));

    act(() => {
      result.current.setValue('firstName', 'Lorem');
      result.current.setValue('lastName', 'Ipsum');
      result.current.setValue('email', 'asdad');
      result.current.setValue('password', 'test');
      result.current.setValue('confirmPassword', 'test1');
    });

    await act(async () => {
      await result.current.handleSubmit(event);
    });

    expect(event.preventDefault).toBeCalled();
    expect(result.current.errors).toEqual({
      email: errorMessages.emailValidate,
      password: errorMessages.passwordValidate,
      confirmPassword: errorMessages.confirmPasswordValidate,
    });
    expect(result.current.submitting).toBe(false);
    expect(onSuccess).not.toBeCalled();
  });

  it('Should call onSuccess when there are no errors', async () => {
    const { result } = renderHook(() => useRegisterForm(onSuccess));

    act(() => {
      result.current.setValue('firstName', 'Lorem');
      result.current.setValue('lastName', 'Ipsum');
      result.current.setValue('email', 'asdad@asdasd.com');
      result.current.setValue('password', 'testA$2333');
      result.current.setValue('confirmPassword', 'testA$2333');
    });

    await act(async () => {
      await result.current.handleSubmit(event);
    });

    expect(event.preventDefault).toBeCalled();
    expect(result.current.errors).toEqual({});
    expect(result.current.submitting).toBe(false);
    expect(onSuccess).toBeCalled();
  });
});
