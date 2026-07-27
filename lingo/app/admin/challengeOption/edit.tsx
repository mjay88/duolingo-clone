import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Text" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput
          source="imageSrc"
          label="Image URL"
          validate={[required()]}
        />
        <TextInput
          source="audioSrc"
          label="Audio URL"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
};

