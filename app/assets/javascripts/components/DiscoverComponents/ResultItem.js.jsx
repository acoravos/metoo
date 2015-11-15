var ResultItem = React.createClass({
  render: function(){
    return (
      <div className="event result_list_event">

        <div className="label">
          <img src={this.props.image} />
        </div>

        <div className="content">
          <div className="summary">
              <a href={this.props.link}>{this.props.title}</a> | <em className="result_item_category">{this.props.categoryName}</em>
              <br/>
              <div className="date">
              <b>Submitted on </b> {this.props.date.substring(0,10)} | <b>Upvotes:</b> {this.props.points}
              </div>
          </div>
              <div className="extra text">
                <em className="result_item_category">{this.props.address}</em><br/>
                {this.props.description}
              </div>
              <br/>
              <hr/>
        </div>
      </div>
      )
  }
})
