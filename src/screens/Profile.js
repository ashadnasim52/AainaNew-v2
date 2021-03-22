import {
  Container,
  Text,
  Content,
  H3,
  Row,
  Col,
  H1,
  H2,
  Card,
  CardItem,
} from 'native-base';
import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import {PRIMARY} from '../theme/colors';

const data = [
  {
    no: '1',
    parameter: 'Full Name',
    value: 'Ravin',
  },
  {
    no: '2',
    parameter: 'Gender',
    value: 'Male',
  },
  {
    no: '3',
    parameter: 'Height',
    value: '5 ft 10 in / 177 cm',
  },
  {
    no: '4',
    parameter: 'Weight',
    value: '71 kg',
  },
  {
    no: '5',
    parameter: 'Body Mass Index (BMI)',
    value: '22.33',
  },
  {
    no: '6',
    parameter: 'Neck',
    value: '15.19 inch/ 5.98. cm',
  },
  {
    no: '7',
    parameter: 'Waist',
    value: '38.63 inch/ 15.21.cm',
  },
  {
    no: '8',
    parameter: 'Hips',
    value: '38.63 inch/ 15.21.cm',
  },
];

const Profile = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
      }}>
      <Container
        style={{
          flex: 1,
        }}>
        <Content padder>
          <H3
            style={{
              fontWeight: '800',
            }}>
            Body Profile
          </H3>

          <Text style={{marginTop: 5}}>
            Following are the body profile parameters such as height, weight,
            bmi, neck, shoulder, chest, waist, hips, body front photo and body
            side photo These body profile paramets have been calculated by
            Aaiena's state-of-the-art Artificial Intelligence system
          </Text>

          <Row
            style={{
              marginVertical: 20,
            }}>
            <Col
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Card
                style={{
                  borderRadius: 15,
                  overflow: 'hidden',
                }}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri: 'https://picsum.photos/id/1005/5760/3840',
                      height: 190,
                      width: '100%',
                    }}
                  />
                </CardItem>
              </Card>
              <Text
                style={{
                  marginVertical: 10,
                  color: PRIMARY,
                }}>
                Front Body Photo
              </Text>
            </Col>
            <Col
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Card
                style={{
                  borderRadius: 15,
                  overflow: 'hidden',
                }}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri: 'https://picsum.photos/id/1005/5760/3840',
                      height: 190,
                      width: '100%',
                    }}
                  />
                </CardItem>
              </Card>
              <Text
                style={{
                  marginVertical: 10,
                  color: PRIMARY,
                }}>
                Side Body Photo
              </Text>
            </Col>
          </Row>

          <Row>
            <Col size={1}>
              <H2> # </H2>
            </Col>
            <Col
              size={6}
              style={{
                alignItems: 'center',
              }}>
              <H2> Parameter</H2>
            </Col>
            <Col
              size={6}
              style={{
                alignItems: 'center',
              }}>
              <H2> Value</H2>
            </Col>
          </Row>
          {data.map((singleData) => (
            <Row
              style={{
                marginVertical: 10,
              }}>
              <Col size={1}>
                <Text
                  style={{
                    fontSize: 14,
                  }}>
                  {singleData.no}
                </Text>
              </Col>
              <Col
                size={6}
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                  }}>
                  {singleData.parameter}
                </Text>
              </Col>
              <Col
                size={6}
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                  }}>
                  {singleData.value}
                </Text>
              </Col>
            </Row>
          ))}
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
