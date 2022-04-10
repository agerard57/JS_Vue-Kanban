import axiosInstance from "./axiosInstance";

// Toast
const actionConfirmation = (action, task, toast) => {
  toast.success(`You have successfully ${action} ${task}!`, {
    position: "top-right",
  });
};
class CardsService {
  // Gets all cards
  getAllCards() {
    return axiosInstance.get(`/todos`);
  }

  // Gets one card by id
  getCard(id) {
    return axiosInstance.get(`/todos/${id}`);
  }

  // Adds a new card
  async addCard(form, toast, router) {
    try {
      const task = await axiosInstance.post("/todos", form);
      actionConfirmation("added", task.data.title, toast);
      router.push("/todos");
    } catch (error) {
      console.log(error);
    }
  }

  // Edits an existing card by id
  async editCard(id, form, toast, router) {
    try {
      const task = await axiosInstance.put(`/todos/${id}`, form);
      actionConfirmation("edited", task.data.title, toast);
      router.push("/todos");
    } catch (error) {
      console.log(error);
    }
  }

  // Deletes an existing card by id
  async deleteCard(id, toast, router) {
    await axiosInstance.delete(`/todos/${id}`);
    actionConfirmation("deleted", "your task", toast);
    router.go(0);
  }
}

export default new CardsService();
