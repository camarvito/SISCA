<template>
  <div class="popup">Usuário cadastrado com sucesso!</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.popup {
  background-color: #2ecc71;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 5rem;
  width: 20rem;
  position: fixed;
  right: 2rem;
  top: 7rem;
  border-radius: 0.7rem;

  animation: fast-popup-show 4s ease;
}

@keyframes fast-popup-show {
  0% {
    transform: translateX(400px);
    opacity: 1;
  }
  10% {
    transform: translateX(0px);
    opacity: 1;
  }
  90% {
    transform: translateX(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 0;
  }
}
</style>