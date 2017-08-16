import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class HeaderComp extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name={this.props.name} onPress={this.props.press}></Icon>
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.header}</Title>
                </Body>
            </Header>
        )
    }
}

const styles = {
}

export default HeaderComp;