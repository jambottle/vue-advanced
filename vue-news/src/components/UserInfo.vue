<template>
  <section id="user-info">
    <i class="user-info__icon fas fa-user" />
    <div class="user-info__profile">
      <p>
        <slot name="user" />
      </p>
      <small>
        <slot name="time" />
        <slot name="karma" />
      </small>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#user-info {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;

  .user-info__icon {
    font-size: 2rem;
  }

  .user-info__profile {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 10px;

    p {
      margin: 0;
    }

    small {
      font-size: 0.8rem;
    }
  }
}
</style>
