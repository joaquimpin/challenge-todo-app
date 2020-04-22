import React, { useState } from "react";
import { List } from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

export const App = () => {
  const [Task, setTask] = useState([]);

  const { register, handleSubmit, errors,reset } = useForm();

  const onSubmit = (data) => {
    let NewData = [...Task];
    NewData.push(data);
    setTask(NewData);
    axios.post(`http://localhost:4000/api/v1/todos`, {
      title: data.title,
      body: data.body,
    });
    reset();
  };

  return (
    <Container>
      <Row md="6" variant="primary">
        <Col>
          Add Todo
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="title"
              name="title"
              ref={register}
            />
            <input
              type="text"
              placeholder="body"
              name="body"
              ref={register}
            />
            <input type="submit" />
          </form>
        </Col>
        <Col>
          ToDo List
          <List task={Task} />
        </Col>
      </Row>
    </Container>
  );
};
