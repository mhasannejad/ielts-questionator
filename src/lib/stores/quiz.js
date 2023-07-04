import {writable} from "svelte/store";

export const quiz = writable({
    quiz_field: 'reading',
    quiz_level: 'easy',
    question_type: 'four options',
    quiz_count: '1'
})


export const questionsMade = writable([])
