import { computed } from 'vue'

export const useFormProps = {
  name: String
}

export function useFormAttrs (props) {
  return computed(() => ({
    type: 'hidden',
    name: props.name,
    value: props.modelValue
  }))
}

export function useFormInputNameAttr (props) {
  return computed(() => props.name || props.for)
}
