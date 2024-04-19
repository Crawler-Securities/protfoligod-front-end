## configuration

### development

the configuration file is a json file in the public/ dir \
in order to use the config file we got the utils/config for the context creator \
and then the utils/hooks/useConfig for useing the Context easyliy like so:

```tsx
import {useConfig} from '../utils/hooks/useConfig'

const ExampleComponent: React.FC = () => {
    const config = useConfig() as any;
    return <>
        {/* use the config like config.foo */}
    </>
}
// ...
```