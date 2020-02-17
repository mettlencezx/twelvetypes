import React from "react";
import { Placeholder, Card } from "semantic-ui-react";

const MemberArea = () => (
  <Card.Group doubling itemsPerRow={3} stackable>
    <Card>
      <Placeholder>
        <Placeholder.Image square />
      </Placeholder>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="very short" />
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Card.Content>
    </Card>
  </Card.Group>
);
export default MemberArea;
