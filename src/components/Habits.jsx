import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (habit) => {
    this.props.onAdd(habit);
  };

  handleReset = (habit) => {
    this.props.onReset(habit);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
            />
          ))}
        </ul>
        <button className='habits-reset' onClick={this.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
