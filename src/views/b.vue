<template>
  <div>
    <questions-render :questions="data" :index="20"></questions-render>
  </div>
</template>
<script setup="setup" lang="ts">
import {answerModuleMap} from "questions-render/editor"
const el = useCurrentElement()
provide("layoutContentRef", el)
const aa = ref()
setInterval(()=>{
  console.log(answerModuleMap.value)
},1000)
const data = ref({
  "content": "<p>Mr. Ma, a famous mental(心理的) doctor from Beijing said at a meeting, \"Now many young students have mental problems. Some students become <span data-w-e-type=\"answerModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerModule_18f9f6a119c\" ></span> because they have to study very hard. Others have<span data-w-e-type=\"answerModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerModule_18f9f6a492f\" ></span> getting on well with people around them like their parents and classmates.\"</p><p>Then Mr. Ma gave some<span data-w-e-type=\"answerModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerModule_18f9f6a7343\" ></span>. A middle school student from Xi'an was doing badly in his lessons. He thought his teachers and friends often<span data-w-e-type=\"answerModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerModule_18f9f6a9ca3\" ></span> him, and he became so nervous and worried that one night he <span data-w-e-type=\"answerModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerModule_18f9f6ac35b\" ></span> his home without telling hissecrets.</p><p>Talk to your parents or teachers often.</p><p>Take part in group activities.</p><p>Try to get on well with the people around you.</p><p>Go to see a doctor if you often feel unhappy.</p><p><br></p><p>1.<span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6d02b2\" ></span>.worried <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6d1634\" ></span>.excited <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6d2b83\" ></span>.happy <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6d3ca8\" ></span>.confident</p><p>2.<span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6d6986\" ></span>.rules <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6d7bc9\" ></span>.trouble <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6d90da\" ></span>.ways <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6dba98\" ></span>.excuse</p><p>3. <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6dd04a\" ></span>. experiences <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6de83d\" ></span>. questions <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6df9ba\" ></span>. examples <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6e0a43\" ></span>. decisions</p><p>4. <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6e1fe7\" ></span>. laughed at <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6e33c2\" ></span>. aimed at <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6e4518\" ></span>. looked up <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6e5501\" ></span>. picked up</p><p>5.<span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6ea5d0\" ></span>.passed <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6ebbe8\" ></span>.left <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6eccab\" ></span>.helped <span data-w-e-type=\"answerOptionsModule\" data-w-e-is-void data-w-e-is-inline data-value=\"\" id=\"answerOptionsModule_18f9f6eddb3\" ></span>.lost</p>",
  "analyze": "<p><br></p>",
  "components": {
    "answerModule_18f9f6a119c": {
      "answerArea": false,
      "lineType": "short",
      "type": "complete-fill",
      "value": "A",
      "mode": "answerModule"
    },
    "answerModule_18f9f6a492f": {
      "answerArea": false,
      "lineType": "short",
      "type": "complete-fill",
      "value": "B",
      "mode": "answerModule"
    },
    "answerModule_18f9f6a7343": {
      "answerArea": false,
      "lineType": "short",
      "type": "complete-fill",
      "value": "C",
      "mode": "answerModule"
    },
    "answerModule_18f9f6a9ca3": {
      "answerArea": false,
      "lineType": "short",
      "type": "complete-fill",
      "value": "A",
      "mode": "answerModule"
    },
    "answerModule_18f9f6ac35b": {
      "answerArea": false,
      "lineType": "short",
      "type": "complete-fill",
      "value": "B",
      "mode": "answerModule"
    },
    "answerOptionsModule_18f9f6d02b2": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "A",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6d1634": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "B",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6d2b83": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "C",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6d3ca8": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "D",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6d6986": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "A",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6d7bc9": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "B",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6d90da": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "C",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6dba98": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "D",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6dd04a": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "A",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6de83d": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "B",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6df9ba": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "C",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6e0a43": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "D",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6e1fe7": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "A",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6e33c2": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "B",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6e4518": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "C",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6e5501": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "D",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6ea5d0": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "A",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6ebbe8": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "B",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6eccab": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "C",
      "mode": "answerOptionsModule"
    },
    "answerOptionsModule_18f9f6eddb3": {
      "answerArea": false,
      "lineType": "short",
      "type": "radio",
      "value": "D",
      "mode": "answerOptionsModule"
    }
  },
  "type": "complete-fill",
  "level": 0,
  "status": 3,
  "science": [],
  "student": {
    "answer": "A,B,C,D,A"
  }
})
</script>
