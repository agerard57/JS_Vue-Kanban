import axiosInstance from "./axiosInstance";
const actionConfirmation = (action, task, toast) => {
  toast.success(`You have successfully ${action} ${task}!`, {
    position: "top-right",
  });
};

class CardsService {
  getAllCards() {
    return axiosInstance.get(`/todos`);
  }

  getCard(id) {
    return axiosInstance.get(`/todos/${id}`);
  }

  async addCard(form, toast, router) {
    try {
      const task = await axiosInstance.post("/todos", form);
      actionConfirmation("added", task.data.title, toast);
      router.push("/todos");
    } catch (error) {
      console.log(error);
    }
  }

  async editCard(id, form, toast, router) {
    try {
      const task = await axiosInstance.put(`/todos/${id}`, form);
      actionConfirmation("edited", task.data.title, toast);
      router.push("/todos");
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCard(id, toast, router) {
    await axiosInstance.delete(`/todos/${id}`);
    actionConfirmation("deleted", "your task", toast);
    router.go(0);
  }
}

export default new CardsService();
