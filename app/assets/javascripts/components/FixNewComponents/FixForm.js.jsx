var FixForm = React.createClass({


  /*  handleSubmit: function(event){

   event.preventDefault()

    var titleNode = this.refs.title.getDOMNode();
    var descriptionNode = this.refs.description.getDOMNode();

    var title = titleNode.value.trim()
    var description = descriptionNode.value.trim()
    var issue_id = this.props.issue.id

    var fix = {
      title: title,
      description: description,
      issue_id: issue_id,
    }

    // submit
    this.props.onFixSubmit(fix)

  }, */

  render: function(){
    return (
      <div className="fix_form_wrapper">
        <form className="ui form" action={'/issues/' + this.props.issue.id + '/fixes'} method="post"  /* onSubmit={this.handleSubmit} */  ref="form" encType="multipart/form-data">

        <div className="field">
          <label htmlFor="ff_title">Name The Resolution</label>
          <input id="ff_title" ref="title" name="title" type="text" />
        </div>

        <div className="field">
          <label htmlFor="ff_description">Describe the Resolution</label>
          <textarea id="ff_description" rows="3" ref="description" name="description" type="text" />
        </div>

        <div className="field">
          <label>Upload an Image of your Fix</label>
          <ImageUploadForm />
        </div>
        <br/>

          <button className="ui button primary" type="submit">Resolve this incident </button>
        </form>
      </div>
      )
  }
})
