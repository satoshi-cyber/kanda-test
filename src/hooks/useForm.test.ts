import { act, renderHook } from '@testing-library/react-hooks/native';

import * as yup from 'yup';
import useForm from './useForm';

describe('useForm', () => {
  const errorMessage = 'Field Required';

  it('Should return errors on required fields', async () => {
    const event = { preventDefault: jest.fn() } as any;
    const onSuccess = jest.fn();

    const schema = yup.object({
      firstName: yup.string().required(errorMessage),
      lastName: yup.string().required(errorMessage),
    });

    const { result } = renderHook(() => useForm({ onSuccess, schema }));

    expect(result.current.pristine).toBe(true);

    act(() => {
      result.current.setValue('firstName', 'Lorem');
    });

    expect(result.current.pristine).toBe(false);

    await act(async () => {
      await result.current.handleSubmit(event);
    });

    expect(event.preventDefault).toBeCalled();
    expect(result.current.errors).toEqual({ lastName: errorMessage });
    expect(result.current.submitting).toBe(false);
    expect(onSuccess).not.toBeCalled();
  });

  it('Should call onSuccess when there is no error', async () => {
    const event = { preventDefault: jest.fn() } as any;
    const onSuccess = jest.fn();

    const schema = yup.object({
      firstName: yup.string().required('Field Required'),
      lastName: yup.string().required('Field Required'),
    });

    const { result } = renderHook(() => useForm({ onSuccess, schema }));

    act(() => {
      result.current.setValue('firstName', 'Lorem');
      result.current.setValue('lastName', 'Ipsum');
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
