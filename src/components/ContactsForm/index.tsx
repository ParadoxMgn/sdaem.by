import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import cn from 'classnames';
import st from './style.module.scss';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .max(20, 'Name must not exceed 20 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  message: Yup.string()
    .required('Message is required')
    .max(200, 'Password must not exceed 40 characters'),
});

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className={cn(st.form)}>
  <form onSubmit={onSubmit}>
    <div className={cn(st.inputs)}>
      <label className={cn(st["label-input"])}>
        <p>Ваше имя</p>
        <input {...register("name")} className={cn(st.name, {[st.err]: errors?.name })} type="text" placeholder='Введите' />
        {errors?.name && 
          <div className={cn(st['errors-wrapper'])}>
            <p className={cn(st.errors)}>{errors.name.message}</p>
          </div>
        }
      </label>
      <label className={cn(st["label-input"])}>
        <p>Ваша электронная почта</p>
        <input {...register("email")} className={cn(st.mails, {[st.err]: errors?.email })} type="email" placeholder='Введите' />
        {errors?.email && 
          <div className={cn(st['errors-wrapper'])}>
            <p className={cn(st.errors)}>{errors.email.message}</p>
          </div>
        }
      </label>
    </div>
    <label className={cn(st["label-text"])}>
      <p>Ваше сообщение</p>
      <textarea {...register("message")} className={cn(st.textarea, {[st.err]: errors?.message })} placeholder='Сообщение'></textarea>
      {errors?.message && 
        <div className={cn(st['errors-wrapper'])}>
          <p className={cn(st.errors)}>{errors.message.message}</p>
        </div>
      }
    </label>
    <button className={cn(st.btn)}>Отправить</button>
  </form>
</div>
  );
};

export default memo(ContactsForm);


