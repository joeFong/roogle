import * as Yup from 'yup';

type Search = {
    q: string | null | undefined
}

export const initialValues: Search = {
    q: ''
}

export const searchSchema = Yup.object().shape({
    q: Yup.string()
        .max(1000, 'Too Long!')
})