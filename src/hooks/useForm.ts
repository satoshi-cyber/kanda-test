import { useCallback, useRef, useState } from 'react';
import * as yup from 'yup';

interface YumError {
  path: string;
  message: string;
}

interface Options<F> {
  schema: yup.SchemaOf<F>;
  onSuccess: () => void;
}

const INITIAL_VALUES = {};
const INITIAL_ERRORS = {};

const useForm = <F>({ schema, onSuccess }: Options<F>) => {
  const values = useRef<Record<string, unknown>>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Record<string, string>>(INITIAL_ERRORS);
  const [pristine, setPristine] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const setValue = useCallback(
    (name: string, value: unknown) => {
      values.current[name] = value;
      if (pristine) {
        setPristine(false);
      }
    },
    [pristine],
  );

  const handleSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      setErrors(INITIAL_ERRORS);
      setSubmitting(true);

      await schema
        .validate(values.current, { abortEarly: false })
        .then(onSuccess)
        .catch((err) => {
          const errorsEntries = err.inner.map((e: YumError) => [e.path, e.message]);
          const formErrors = Object.fromEntries(errorsEntries);
          setErrors(formErrors);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
    [onSuccess, schema, setErrors],
  );

  return { values, errors, setValue, handleSubmit, pristine, submitting };
};

export default useForm;
