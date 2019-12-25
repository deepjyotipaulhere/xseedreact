import React from 'react'

export default class restaurant extends React.Component{
    state={
        name:'',
        lat:'',
        long:'',
        address:''
    }
    render()
    {
        return (
            <div class="ui card" style={{width:'100%'}}>
                <div class="content">
        <span class="right floated mini ui image" style={{color: this.props.color}}><i class="star icon"></i> {this.props.rating}</span>
                <div class="header">
                    <h5>
                    {this.props.name}
                    </h5>
                </div>
                <div class="meta">
                Rated {this.props.text} by {this.props.votes} users
                </div>
                <div class="description">
                    <div class="ui circular labels">
                        {
                            this.props.cuisines.map(c=><a class="ui label" key={c}>{c}</a>)
                        }
                    </div>
                <i class="money bill alternate outline icon"></i> {this.props.currency}
                <i class="map marker alternate icon" style={{float:'right',cursor:'pointer'}} title="View Location" onClick={()=>{
                    this.setState({
                        name: this.props.name,
                        lat: this.props.lat,
                        long: this.props.long,
                        address:this.props.address
                    })
                    window.$('#'+this.props.id).modal('show')
                }
                }></i>
                </div>
                </div>
                <div class="extra content">
                    <div class="ui two column grid">
                        <div class="column">
                            <span style={this.props.booking==='Yes'?{color:'green'}:{color:'red'}}>
                                <span>
                                    {this.props.booking==='Yes'?<i class="check icon"></i>:<i class="close icon"></i>}
                                </span>
                                Table Booking
                            </span>
                        </div>
                        <div class="column">
                        <span style={this.props.delivery==='Yes'?{color:'green'}:{color:'red'}}>
                                <span>
                                    {this.props.delivery==='Yes'?<i class="check icon"></i>:<i class="close icon"></i>}
                                </span>
                                Online Delivery
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ui basic modal" id={this.props.id}>
                    <i class="close icon"></i>
                    <div class="header">
                        {this.state.name}
                        <p style={{fontSize:'x-small'}}>{this.props.address}</p>
                    </div>
                    <div class="image content">
                        <div class="ui medium image">
                        <img src="/images/avatar/large/chris.jpg"/>
                        </div>
                        <div class="description">
                        <div class="ui header">We've auto-chosen a profile image for you.</div>
                        <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="ui black deny button">
                        Nope
                        </div>
                        <div class="ui positive right labeled icon button">
                        Yep, that's me
                        <i class="checkmark icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}