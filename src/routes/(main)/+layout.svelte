<script>
    import {questionsMade, quiz} from "$lib/stores/quiz.js";


    const generate = async () => {
        const res = await fetch(`/api/ai/quiz/`, {
            method: 'POST',
            body: JSON.stringify($quiz)
        });
        $questionsMade = await res.json()
    }
</script>

<div class="row">
    <div class="col-4 form-column">
        <form>
            <div class="mb-3">
                <label for="question-field" class="form-label">Select Field:</label>
                <select bind:value={$quiz.quiz_field} id="question-field" class="form-select"
                        aria-label="Select Field:">
                    <option selected value="reading">reading</option>
                    <option value="writing">writing</option>
                    <option value="listening">listening</option>
                    <option value="speaking">speaking</option>

                </select>
            </div>
            <div class="mb-3">
                <label for="question-level" class="form-label">Select question level:</label>
                <select bind:value={$quiz.quiz_level} id="question-level" class="form-select"
                        aria-label="Select Field:">
                    <option selected value="easy">easy</option>
                    <option value="normal">normal</option>
                    <option value="hard">hard</option>
                    <option value="very hard">very hard</option>

                </select>
            </div>
            <div class="mb-3">
                <label for="question-type" class="form-label">Select Question Type:</label>
                <select bind:value={$quiz.question_type} id="question-type" class="form-select"
                        aria-label="Select Field:">
                    <option value="four options">four options</option>
                    <option value="fill in the blanks">fill in the blanks</option>
                    <option value="answer the following">answer the following</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="question-count" class="form-label">how many?</label>
                <select bind:value={$quiz.quiz_count} id="question-count" class="form-select"
                        aria-label="Select Field:">

                    {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as c}
                        <option value="{c}">{c}</option>
                    {/each}
                </select>
            </div>
            <div class="d-grid gap-2">
                <a on:click={generate} type="submit" class="btn btn-primary">Generate</a>

            </div>
        </form>
    </div>
    <div class="col-8">
        <slot/>
    </div>
</div>
