<template>
  <div class="text-group">
    <div class="input-group" :class="{'is-invalid':error}">
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "inputGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    error: Boolean
  }
};
</script>


<style scoped>
.input-group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input-group input {
  height: 100%;
  width: 1000%;
  outline: none;
  border: 0;
}
.is-invalid {
  border: 1px solid red;
}
/* .invalid-feedback {
  color: red;
  padding-top: 5px;
} */
</style>