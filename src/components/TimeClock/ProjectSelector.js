import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, FormControl, Button, Label} from 'react-bootstrap';


class ProjectSelector extends Component {
  static propTypes = {
    allProjects: PropTypes.array.isRequired,
    createProject: PropTypes.func.isRequired,
    projectName: PropTypes.string,
    toggleProject: PropTypes.func.isRequired,

  };
  render() {
    const handleNewProject = () => {
      const projectName = ReactDOM.findDOMNode(this.refs.projectName);
      this.props.createProject({
        projectName: projectName.value
      });
    };
    const handleProjectToggle = (data) => {
      this.props.toggleProject({
        projectId: data
      });
    };
    const allProjectList = this.props.allProjects.map((project) => {
      return (
        <h4
          key={project.projectId}
        >
          <Label
            bsStyle={project.active ? 'info' : 'default'}
            onClick={() => handleProjectToggle(project.projectId)}
          >
            {project.projectName}
          </Label>
        </h4>
      );
    });
    return (
      <div>
        <h3>Projects</h3>
        <Form inline>
          <FormGroup controlId="NewProjectForm">
            <FormControl
              type="text"
              placeholder="Add a project..."
              ref="projectName"
            />
          </FormGroup>
          <Button
              onClick={handleNewProject}
          >Add</Button>
      </Form>
      {allProjectList}
      </div>
    );
  }
}

export default ProjectSelector;
