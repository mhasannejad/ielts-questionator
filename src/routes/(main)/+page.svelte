<script>
    import {questionsMade} from "$lib/stores/quiz.js";
</script>

{#each $questionsMade as q}
    <div class="card m-2" style="">
        <div class="card-body">
            <p class="card-text">{q["question"]}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{q["option-1"]}</li>
            <li class="list-group-item">{q["option-2"]}</li>
            <li class="list-group-item">{q["option-3"]}</li>
            <li class="list-group-item">{q["option-4"]}</li>
        </ul>
    </div>

{/each}
