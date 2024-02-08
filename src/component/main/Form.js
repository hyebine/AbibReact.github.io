import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import '../../scss/abibForm'

function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (

        <div className=''>
            <div className=''>
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>상담예약</h2>
                        <p>고객님의 기본정보를 입력해 주시면
                            <strong>Abib</strong>가 연락드리겠습니다.</p>

                        <div className=''>
                            <label htmlFor="name">이름</label>
                            <input name='name' type='text' placeholder='이름을 입력하세요.' {...register("name", { required: true })} />
                            {errors.name && <span>이름을 입력하세요.</span>}
                        </div>

                        <div className=''>
                            <label htmlFor="phone">연락처</label>
                            <input name='phone' type='number' placeholder='연락처를 입력하세요.' {...register("phone", { required: true })} />
                            {errors.phone && <span>연락처를 입력하세요.</span>}
                        </div>

                        <div className=''>
                            <label htmlFor="question">문의사항</label>
                            <textarea name='question' type='question' placeholder='내용을 입력해주세요.' {...register("question", { required: true })} />
                            {errors.question && <span>내용을 입력하세요.</span>}
                        </div>

                        <div className=''>
                            <label>
                                <input type="checkbox" {...register("agreement", { required: true })} /> 개인정보 수집 및 활용동의
                            </label>
                            {errors.agreement && <span>동의가 필요합니다.</span>}
                        </div>

                        <button type="submit">상담 예약하기</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Form