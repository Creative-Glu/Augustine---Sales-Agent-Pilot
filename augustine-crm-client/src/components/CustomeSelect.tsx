import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface OptionType {
  id: string | number;
  label: string;
  value: string;
}

interface Props {
  optionsData: OptionType[];
  className?: string;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

export function CustomeSelect({
  optionsData,
  className = '',
  label,
  placeholder,
  onChange,
  value,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-card-foreground">{label}</label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-full ${className}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {optionsData?.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
