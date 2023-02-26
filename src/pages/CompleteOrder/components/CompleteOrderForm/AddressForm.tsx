import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        mask={'99999-999'}
        placeholder="CEP"
        className="cep"
        type="tel"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="tel"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        mask={'aa'}
        placeholder="UF"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
